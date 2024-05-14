// Forteeに依存してもいなくても、より汎用的な型定義の方が適している
declare module "fortee" {
    type StaffCategory = "core";

    type StaffData = {
        staff: {
        core_staff: Person[];
    };
    };

    type Person = {
        id: string;
        name: string;
        url: string;
        avatar_url: string;
    };
}