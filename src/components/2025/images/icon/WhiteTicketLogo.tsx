import type { ComponentProps } from "react";

export default function WhiteTicketLogo({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.18469V5.3097C1.79565 5.3097 2.55871 5.64552 3.12132 6.24329C3.68393 6.84107 4 7.65182 4 8.4972C4 9.34258 3.68393 10.1533 3.12132 10.7511C2.55871 11.3489 1.79565 11.6847 1 11.6847V13.8097C1 14.9785 1.9 15.9347 3 15.9347H17C17.5304 15.9347 18.0391 15.7108 18.4142 15.3123C18.7893 14.9138 19 14.3733 19 13.8097V11.6847C18.2043 11.6847 17.4413 11.3489 16.8787 10.7511C16.3161 10.1533 16 9.34258 16 8.4972C16 7.65182 16.3161 6.84107 16.8787 6.24329C17.4413 5.64552 18.2043 5.3097 19 5.3097V3.18469C19 2.62111 18.7893 2.08061 18.4142 1.68209C18.0391 1.28358 17.5304 1.05969 17 1.05969H3C2.46957 1.05969 1.96086 1.28358 1.58579 1.68209C1.21071 2.08061 1 2.62111 1 3.18469Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 1.05969V3.18469"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 13.8101V15.9351"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 7.43469V9.55969"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
