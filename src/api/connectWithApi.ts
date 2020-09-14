import { BASEURL, PORT } from './const';
import { ApiError } from './throwErrors/ApiError';

const connectWithApi = async (
  route: string,
  methodSelected: string,
  data?: any
) => {
  try {
    const result = await fetch(`${BASEURL}${PORT}${route}`, {
      method: methodSelected,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    //tratamiento errores api
    if (!result.ok) {
      throw result.status;
    }

    const resultJson = await result.json();
    return resultJson;
    //tratamiento de errores
  } catch (error) {
    let code = !isNaN(error) ? error : 500;

    throw new ApiError(code);
  }
};

export { connectWithApi };
