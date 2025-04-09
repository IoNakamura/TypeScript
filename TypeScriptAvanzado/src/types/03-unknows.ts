//Variables Any

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = "Hola";
anyVar = 12;
anyVar = {};

let isNew: boolean = anyVar;

anyVar.hacerAlgo();
anyVar.toUpperCase();

//Variables Unknown

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = "Hola";
unknownVar = 12;
unknownVar = {};

//unknownVar.hacerAlgo();

if (typeof unknownVar === "string") {
    unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

const a = parse("123");


if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
  console.log("Valor como string:", unknownVar.toUpperCase());
}

if (typeof unknownVar === "boolean") {
  let isNewV2: boolean = unknownVar;
  console.log("Valor como boolean:", isNewV2);
}

if (typeof unknownVar === "object" && unknownVar !== null) {
  let isNewV3: object = unknownVar;
  console.log("Valor como object:", isNewV3);
}



