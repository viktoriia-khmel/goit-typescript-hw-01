type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare(top: AllType, bottom: AllType): Pick<AllType, "name" | "color" | "position" | "weight"> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}