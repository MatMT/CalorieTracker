type CaloriesDisplayProps = {
  calories: number;
  text: string;
};

export default function CaloriesDisplay({
  calories,
  text,
}: CaloriesDisplayProps) {
  const isConsumed =
    text === "Consumidas"
      ? "text-lime-500"
      : text === "Ejercicio"
      ? "text-orange-500"
      : "text-white";

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className={`font-black text-8xl ${isConsumed}`}>{calories}</span>
      {text}
    </p>
  );
}
