export function PageWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="ml-5 mr-0 my-16 sm:ml-[300px] sm:h-[calc(100vh-60px)] overflow-auto">
      {children}
    </main>
  );
}
