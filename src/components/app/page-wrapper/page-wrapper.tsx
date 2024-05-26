export function PageWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-5 my-20 sm:ml-[300px] sm:h-[calc(100%-88px)]">
      {children}
    </main>
  );
}
