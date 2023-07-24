interface ExperiencesRowProps {
  name: string;
  date: string;
  description: string[];
}

export function ExperiencesRow({ name, date, description }: ExperiencesRowProps) {
  return (
    <div key={name}>
      <p className="font-bold">{name}</p>
      <p className="italic">{date}</p>
      <ul className="list-disc list-inside ml-2">
        {description.map((bulletPoint) => (
          <li key={bulletPoint}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
}
