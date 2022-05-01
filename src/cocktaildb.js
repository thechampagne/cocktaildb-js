/*
 * Copyright 2022 XXIV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const https = require("https");

const http = async (endpoint) => {
  return new Promise((resolve, reject) => {
    const req = https.request(
      `https://thecocktaildb.com/api/json/v1/1/${endpoint}`,
      {
        method: "GET",
      },
      (res) => {
        const body = [];
        res.on("data", (chunk) => body.push(chunk));
        res.on("end", () => {
          const resString = Buffer.concat(body).toString();
          resolve(resString);
        });
      }
    );

    req.on("error", (err) => {
      reject(null);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(null);
    });
    req.end();
  });
};

/**
 * Search cocktail by name.
 *
 * @param  {string} s Cocktail name
 * @return            List of objects
 */
async function search(s) {
  try {
    let response = await http(`search.php?s=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Search cocktails by first letter.
 *
 * @param  {string} s Cocktail letter
 * @return            List of objects
 */
async function searchByLetter(s) {
  try {
    let response = await http(`search.php?f=${s}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Search ingredient by name.
 *
 * @param  {string} s Ingredient letter
 * @return            object
 */
async function searchIngredient(s) {
  try {
    let response = await http(`search.php?i=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.ingredients != null &&
        typeof data.ingredients !== "undefined" &&
        data.ingredients != ""
      ) {
        return data.ingredients[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Search cocktail details by id.
 *
 * @param  {number} i Cocktail id.
 * @return            object
 */
async function searchByID(i) {
  try {
    let response = await http(`lookup.php?i=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Search ingredient by ID.
 *
 * @param  {number} i Ingredient id.
 * @return            object
 */
async function searchIngredientByID(i) {
  try {
    let response = await http(`lookup.php?iid=${i}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.ingredients != null &&
        typeof data.ingredients !== "undefined" &&
        data.ingredients != ""
      ) {
        return data.ingredients[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Search a random cocktail.
 *
 * @return      random cocktail
 */
async function random() {
  try {
    let response = await http("random.php");
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Filter by ingredient.
 *
 * @param  {string} s Ingredient name.
 * @return            List of objects
 */
async function filterByIngredient(s) {
  try {
    let response = await http(`filter.php?i=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Filter by alcoholic.
 *
 * @param  {string} s alcoholic.
 * @return            List of objects
 */
async function filterByAlcoholic(s) {
  try {
    let response = await http(`filter.php?a=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Filter by category.
 *
 * @param  {string} s Category name.
 * @return            List of objects
 */
async function filterByCategory(s) {
  try {
    let response = await http(`filter.php?c=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * Filter by glass.
 *
 * @param  {string} s Glass name.
 * @return            List of objects
 */
async function filterByGlass(s) {
  try {
    let response = await http(`filter.php?g=${encodeURI(s)}`);
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        return data.drinks;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * List the categories filter.
 *
 * @return   List of categories
 */
async function categoriesFilter() {
  try {
    let response = await http("list.php?c=list");
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList = [];
        data.drinks.forEach((filter) => {
          dataList.push(filter.strCategory);
        });
        return dataList;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * List the glasses filter.
 *
 * @return   List of glasses
 */
async function glassesFilter() {
  try {
    let response = await http("list.php?g=list");
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList = [];
        data.drinks.forEach((filter) => {
          dataList.push(filter.strGlass);
        });
        return dataList;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * List the ingredients filter.
 *
 * @return   List of ingredients
 */
async function ingredientsFilter() {
  try {
    let response = await http("list.php?i=list");
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList = [];
        data.drinks.forEach((filter) => {
          dataList.push(filter.strIngredient1);
        });
        return dataList;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

/**
 * List the alcoholic filter.
 *
 * @return   List of alcoholic filters
 */
async function alcoholicFilter() {
  try {
    let response = await http("list.php?a=list");
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.drinks != null &&
        typeof data.drinks !== "undefined" &&
        data.drinks != ""
      ) {
        let dataList = [];
        data.drinks.forEach((filter) => {
          dataList.push(filter.strAlcoholic);
        });
        return dataList;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

module.exports = {
    search,
    searchByID,
    searchByLetter,
    searchIngredient,
    searchIngredientByID,
    random,
    filterByAlcoholic,
    filterByCategory,
    filterByGlass,
    filterByIngredient,
    categoriesFilter,
    glassesFilter,
    alcoholicFilter,
    ingredientsFilter
};