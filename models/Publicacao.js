module.exports = (sequelize, DataTypes) => {
    let publicacao = sequelize.define(
        'Publicacao', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            texto: {
                type: DataTypes.TEXT,
            },
            imagem: {
                type: DataTypes.STRING(45)
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        }, {
            tableName: "publicacoes"
        }
    );

    publicacao.associate = (models) => {
        publicacao.belongsTo(models.Usuario, {
            foreignKey: "usuarios_id",
            as: "autor"
        });
        publicacao.belongsToMany(models.Usuario, 
            {
                as: "curtidores", //Atribuímos um alias com o qual chamaremos o relacionamento
                through: "curtidas", //Nome da tabela intermediária que criará o relacionamento
                foreignKey: "publicacoes_id", //Referência a tabela de modelo que estamos associando
                otherKey: "usuarios_id" //Referência à outra tabela que queremos associar.

            }

        )
    }

    return publicacao;

}