export function Error() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-2 text-center p-12">
        <span className="text-2xl font-expletusSans">PAGE NOT FOUND</span>
        <span>The page you requested does not exist. Please try again.</span>
      </div>
    </div>
  );
}
