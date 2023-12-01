import * as Croppie from "croppie";

export async function createCroppie(
  fileElement: HTMLInputElement,
  croppieElement: HTMLDivElement,
) {
  if (!fileElement.files || fileElement.files.length !== 1) {
    return;
  }

  let croppie = new Croppie(croppieElement, {
    boundary: {
      width: 330,
      height: 300,
    },
    enableExif: true,
    viewport: {
      width: 300,
      height: 240,
      type: "square",
    },
  });

  const file = fileElement.files[0];
  const url = await readAsDataURL(file);
  croppie.bind({
    url: url,
  });

  return croppie;
}

export function destroyCroppie(
  fileElement: HTMLInputElement,
  croppie: Croppie,
) {
  croppie.destroy();
  fileElement.files = null;
  fileElement.value = "";
}

function readAsDataURL(file: File): Promise<string> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(<string>reader.result);
    reader.onerror = () => {
      reader.abort();
      reject(new Error("Unable to read"));
    };

    reader.readAsDataURL(file);
  });
}
