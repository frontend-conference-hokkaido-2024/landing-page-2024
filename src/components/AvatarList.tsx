import Avatar from "@/components/Avatar";

type AvatarListProps = {
    avatarListTitle: string;
    endPointURL: string;
};

const AvatarList = async ({ avatarListTitle, endPointURL }: AvatarListProps) => {
    try {
        const responseData: StaffData = await getData(endPointURL);
        const people: Person[] = responseData.staff.core_staff;
        // peopleがnullまたは空の配列の場合は何も表示しない
        if (!people || people.length === 0) {
            return null; 
        }

        return (
            <div className="mx-5 mb-12 text-center">
                <h1 className="text-3xl font-extrabold mb-8">{avatarListTitle}</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    {people?.map(person => (
                        <Avatar 
                            key={person.id}
                            avatarName={person.name}
                            avatarImage={person.avatar_url || "/images/Icon-black.png"}
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default AvatarList;

async function getData(url: string):Promise<StaffData> {
    try {
        const response = await fetch(new Request(url));
        if (!response.ok) {
            throw new Error(`Failed to fetch data, status: ${response.status}`);
        }
        const data: StaffData = await response.json() as StaffData;
                // 不要な空白を取り除く処理
        if (data.staff && data.staff[' core_staff']) {
                    // 余白を含むプロパティ名から正しいプロパティ名への再割り当て
                    data.staff.core_staff = data.staff[' core_staff'];
                    delete data.staff[' core_staff']; // 古いプロパティを削除
                }
        return data;
    } catch (error) {
        throw new Error('Failed to parse data');
    }
}

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



