import { Model } from "objection";

class PersoModel extends Model {
  static get tableName() {
    return "database";
  }
}

export default PersoModel;
