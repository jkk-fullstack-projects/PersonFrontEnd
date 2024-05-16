import React from 'react';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  identityNumber: string;
}

interface PersonItemProps {
  person: Person;
}

const PersonItem = ({ person }: PersonItemProps) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <p>{person.firstName} {person.lastName}</p>
        <p className="text-sm text-gray-500">{person.identityNumber}</p>
      </div>
    </div>
  );
};

export default PersonItem;