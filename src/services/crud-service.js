class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
          } catch (error) {
            console.log("went wrong in crud service....");
            throw { error };
          }
        
    }

    async delete(id) {
        try {
          const response = await this.repository.destroy(cityId);
          return response;
        } catch (error) {
          console.log("went wrong in service....");
          throw { error };
        }
      }
}

module.exports = CrudService