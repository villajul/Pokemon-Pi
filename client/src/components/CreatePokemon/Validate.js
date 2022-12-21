export default function Validate(input) {
  const error = {};
  const regexName = /^[a-zA-Zñáéíóúü]*$/;
  const regexNumber = /^[0-9]+$/;
  const regexUrl =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (!input.name) error.name = "need a pokemon name";
  if (!regexName.test(input.name)) error.name = "only letters are supported";
  if (input.name.length < 3 || input.name.length > 10)
    error.name = "between three and ten characters";

  if (!regexNumber.test(input.hp)) error.hp = "only numbers from 1 to 255";
  if (!parseInt(input.hp) < 1 && parseInt(input.hp) > 255)
    error.hp = "only numbers from 1 to 255";

  if (!regexNumber.test(input.attack))
    error.attack = "only numbers from 1 to 255";
  if (!parseInt(input.attack) < 1 && parseInt(input.attack) > 255)
    error.attack = "only numbers from 1 to 255";

  if (!regexNumber.test(input.defense))
    error.defense = "only numbers from 1 to 255";
  if (!parseInt(input.defense) < 1 && parseInt(input.defense) > 255)
    error.defense = "only numbers from 1 to 255";

  if (!regexNumber.test(input.speed))
    error.speed = "only numbers from 1 to 255";
  if (!parseInt(input.speed) < 1 && parseInt(input.speed) > 255)
    error.speed = "only numbers from 1 to 255";

  if (!regexNumber.test(input.height))
    error.height = "only numbers from 1 to 20";
  if (!parseInt(input.height) < 1 && parseInt(input.height) > 20)
    error.height = "only numbers from 1 to 20";

  if (!regexNumber.test(input.weight))
    error.weight = "only numbers from 1 to 1000";
  if (!parseInt(input.weight) < 1 && parseInt(input.weight) > 1000)
    error.weight = "only numbers from 1 to 1000";

  if (!regexUrl.test(input.image)) error.image = "image url only";
  if (input.image.length < 14) error.image = "image url only";
  return error;
}
