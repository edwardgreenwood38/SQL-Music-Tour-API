'use strict';


const {
  Model
} = require('sequelize');
const meet_greet = require('./meet_greet');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Band.init({
    band_id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        hasMany: set_time.band_id,
        hasMany: meet_greet.band_id
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });

  return Band;
};
