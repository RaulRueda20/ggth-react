export const ProcesadorArchivo = (datos) => {
  let renglones = datos.split("\r\n");
  let newObject = {
    RId: "",
    TSHARP: "",
    AU: "",
    YR: "",
    ST: "",
    C1: "",
    C2: "",
    C3: "",
    C4: "",
    C5: "",
    C6: "",
    C7: "",
    C8: "",
    C9: "",
    N1: "",
    N2: "",
    N3: "",
    N4: "",
    N5: "",
    N6: "",
    N7: "",
    N8: "",
    N9: "",
    O1: "",
    O2: "",
    O3: "",
    O4: "",
    O5: "",
    O6: "",
    O7: "",
    O8: "",
    O9: "",
    S1: "",
    S2: "",
    S3: "",
    S4: "",
    S5: "",
    S6: "",
    S7: "",
    S8: "",
    S9: "",
    LSHARP: "",
    L: "",
  };
  let arregloFinal = [];
  renglones.forEach((renglon) => {
    if (renglon == "") {
      arregloFinal.push(newObject);
      newObject = {};
    } else {
      const array = renglon.split(":");

      switch (array[0]) {
        case "R#":
          newObject["RId"] = array[1];
          break;
        case "T#":
          newObject["TSHARP"] = array[1];
          break;
        case "AU":
          newObject["AU"] = array[1];
          break;
        case "YR":
          newObject["YR"] = array[1];
          break;
        case "ST":
          newObject["ST"] = array[1];
          break;
        case "C1":
          newObject["C1"] = array[1];
          break;
        case "C2":
          newObject["C2"] = array[1];
          break;
        case "C3":
          newObject["C3"] = array[1];
          break;
        case "C4":
          newObject["C4"] = array[1];
          break;
        case "C5":
          newObject["C5"] = array[1];
          break;
        case "C6":
          newObject["C6"] = array[1];
          break;
        case "C7":
          newObject["C7"] = array[1];
          break;
        case "C8":
          newObject["C8"] = array[1];
          break;
        case "C9":
          newObject["C9"] = array[1];
          break;
        case "N1":
          newObject["N1"] = array[1];
          break;
        case "N2":
          newObject["N2"] = array[1];
          break;
        case "N3":
          newObject["N3"] = array[1];
          break;
        case "N4":
          newObject["N4"] = array[1];
          break;
        case "N5":
          newObject["N5"] = array[1];
          break;
        case "N6":
          newObject["N6"] = array[1];
          break;
        case "N7":
          newObject["N7"] = array[1];
          break;
        case "N8":
          newObject["N8"] = array[1];
          break;
        case "N9":
          newObject["N9"] = array[1];
          break;
        case "O1":
          newObject["O1"] = array[1];
          break;
        case "O2":
          newObject["O2"] = array[1];
          break;
        case "O3":
          newObject["O3"] = array[1];
          break;
        case "O4":
          newObject["O4"] = array[1];
          break;
        case "O5":
          newObject["O5"] = array[1];
          break;
        case "O6":
          newObject["O6"] = array[1];
          break;
        case "O7":
          newObject["O7"] = array[1];
          break;
        case "O8":
          newObject["O8"] = array[1];
          break;
        case "O9":
          newObject["O9"] = array[1];
          break;
        case "S1":
          newObject["S1"] = array[1];
          break;
        case "S2":
          newObject["S2"] = array[1];
          break;
        case "S3":
          newObject["S3"] = array[1];
          break;
        case "S4":
          newObject["S4"] = array[1];
          break;
        case "S5":
          newObject["S5"] = array[1];
          break;
        case "S6":
          newObject["S6"] = array[1];
          break;
        case "S7":
          newObject["S7"] = array[1];
          break;
        case "S8":
          newObject["S8"] = array[1];
          break;
        case "S9":
          newObject["S9"] = array[1];
          break;
        case "L#":
          newObject["LSHARP"] = array[1];
          break;
        case "L0":
          newObject["L"] = array[1];
          break;
      }
    }
  });
  arregloFinal.push(newObject);
  console.log(arregloFinal);
  return arregloFinal.filter(
    (obj) =>
      !(obj && Object.keys(obj).length === 0 && obj.constructor === Object)
  );
};
