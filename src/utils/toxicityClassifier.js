import * as tf from "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";
import debounce from "./debounce";

export const load = async () => await toxicity.load();

export const classify = debounce(async (model, text) => {
  const predictions = await model.classify([text]);
  for (let category of predictions) {
    let [results] = category.results;
    if (results.match) {
      return category.label;
    }
  }
  return "OK!";
}, 1000);
