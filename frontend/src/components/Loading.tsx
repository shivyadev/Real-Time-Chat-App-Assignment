function Loading() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      <span className="text-sm text-gray-700">Loading...</span>
    </div>
  );
}

export default Loading;
