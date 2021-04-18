module.exports = (sequelize, Sequelize) => {
    const Checkup = sequelize.define('checkup', {
      nic: {
        type: Sequelize.STRING(12),
        primaryKey: true,
      },
      visit_date: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      temp: {
        type: Sequelize.DECIMAL(6,3),
        allowNull: false,
      },
      pulse_rate: {
        type: Sequelize.DECIMAL(10,7),
        allowNull: false,
      },
      resp_rate: {
        type: Sequelize.DECIMAL(4,2),
      },
      bp: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      weight: {
        type: Sequelize.DECIMAL(6,3),
        allowNull: false,
      },
      height: {
        type: Sequelize.DECIMAL(6,3),
        allowNull: false,
      },
      bmi: {
        type: Sequelize.DECIMAL(3,1),
      },
      urine: {
        type: Sequelize.STRING(10),
      },
      nurse_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  
    return Checkup;
  };