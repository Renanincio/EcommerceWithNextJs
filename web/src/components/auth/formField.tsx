type FormFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  error?: string;
  register: any;
};

export default function FormField({
  label,
  type = "text",
  placeholder,
  error,
  register,
}: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="input"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}