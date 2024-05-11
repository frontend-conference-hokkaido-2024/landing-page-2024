import Avatar from "@/components/Avatar";
import ErrorBoundary from "@/components/ErrorBoundary";


type AvatarListProps = {
    title: string;
    category: AvatarListAPIEndpointCategory;
};

const AvatarList  = async ({ title, category}: AvatarListProps) => {
    try {
    const endPointURL = getAPIEndpoint(category);
    const response = await fetch(endPointURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch data, status: ${response.status}`);
    }
    const data: StaffData = await response.json() as StaffData;
               // @ts-expect-error: ' core_staff'に含まれる不要な空白を取り除く
        if (data.staff && data.staff[' core_staff']) {
                    // @ts-expect-error: 余白を含むプロパティ名' core_staff'から正しいプロパティ名への再割り当て
                    data.staff.core_staff = data.staff[' core_staff'] as Person[];

                    // @ts-expect-error: 古いプロパティを削除
                    delete data.staff[' core_staff']; 
                }
    const people: Person[] = data.staff.core_staff;
    // peopleがnullまたは空の配列の場合は何も表示しない
    if (!people || people.length === 0) {
        throw new Error(`Failed to fetch data`);
    }
    return (
        <ErrorBoundary>
        <div className="mx-5 mb-12 text-center">
            <h1 className="text-3xl font-extrabold mb-8">{title}</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {people?.map(person => (
                    <Avatar 
                        key={person.id}
                        avatarName={person.name}
                        avatarImage={person.avatar_url ?? "/images/Icon-black.png"}
                    />
                ))}
            </div>
        </div>
        </ErrorBoundary>
    );
} catch (error) {
    return <div>Error: {error.message}</div>; // 直接エラーメッセージを表示
}
};

export default AvatarList;

interface Person {
    "id": string;
    "name": string;
    "url": string;
    "avatar_url": string;
}

interface StaffData {
    "staff": {
        "core_staff": Person[];
    }
}



type AvatarListAPIEndpointCategory = "coreStaff" 

function getAPIEndpoint(category: AvatarListAPIEndpointCategory) {
    switch (category) {
    case "coreStaff":
        return `${process.env.FORTEE_API_HOST}/staff`;
        default:
            throw new Error("Invalid API category");
        }
    }
