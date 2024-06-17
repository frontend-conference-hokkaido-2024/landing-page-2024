
export default function RootLayout({
  children,
  jobBoardSection,
}: Readonly<{
  children: React.ReactNode;
  jobBoardSection: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {jobBoardSection}
    </>
  );
}
