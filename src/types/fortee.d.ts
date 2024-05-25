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
