export const makeMasters = ({ database }) => {
  return Object.freeze({
    add,
    getItems,
  });

  async function add (master) {
    try {
      const master =  await database.models.Master.create(master);
      return {
        success: true,
        created: master
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
  async function getItems () {
    try {
      const masters = await database.models.Master.scope(['withOrders']).findAll();
      return {
        success: true,
        data: masters
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  }
};
