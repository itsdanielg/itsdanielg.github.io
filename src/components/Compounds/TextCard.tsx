import { Card } from "../Atoms/Card";

interface TextCardProps {
  text: string;
}

export function TextCard({ text }: TextCardProps) {
  return (
    <Card className="mx-32">
      <div className="bg-black-1 p-6">
        <span className=" text-white-1">{text}</span>
      </div>
    </Card>
  );
}
