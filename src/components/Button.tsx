interface ButtonProps {
  title: string;
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

export default function Button({ title, type, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
}
