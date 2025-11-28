import { useState, useRef } from "react";
import { UploadCloud, X } from "lucide-react";

interface DragAndDropImageProps {
  image?: string | null;
  setImage: (image: string | null) => void;
  removeImage: () => void;
  setFileSizeOverLimit: (overLimit: boolean) => void;
  children?: React.ReactNode;
}

export default function DragAndDropImage({
  image = "",
  setImage,
  removeImage,
  setFileSizeOverLimit,
  children,
}: DragAndDropImageProps) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter") setDragging(true);
    if (e.type === "dragleave") setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    handleImageDrop(e.dataTransfer.files);
  };

  const handleImageDrop = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      if (file.size > 50 * 1024 * 1024) {
        setFileSizeOverLimit(true);
        return;
      }
      setFileSizeOverLimit(false);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleImageDrop(e.target.files);
  };

  const openFilePicker = () => inputRef.current?.click();

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center shadow-sm bg-white hover:bg-gray-50 ${
        dragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onClick={openFilePicker}
    >
      {image ? (
        <div className="relative w-full max-w-sm">
          <img
            src={image}
            alt="Uploaded"
            className="max-h-80 w-full object-contain rounded-xl border"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              removeImage();
            }}
            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-8">
          <UploadCloud className="h-10 w-10 text-gray-500" />
          <p className="text-gray-600">Drag & Drop or Click to Upload</p>
          {children && <div>{children}</div>}
        </div>
      )}

      <input
        type="file"
        accept="image/jpeg, image/png"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
