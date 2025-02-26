module.exports = (sequelize, DataTypes) => {
    const promotiononboardingvideo = sequelize.define("promotiononboardingvideo", {
        PromotionOnboardingVideoID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        PromotionID: {
            type: DataTypes.INTEGER,
            references: {
                model: "promotion",
                key: "PromotionID"
            }
        },
        DeviceType: {
            type: DataTypes.STRING,
        },
        Title: {
            type: DataTypes.STRING,
        },
        Description: {
            type: DataTypes.STRING,
        },
        CTA: {
            type: DataTypes.STRING,
        },
        ImgFile: {
            type: DataTypes.STRING,
            allow: null,
        },
        VideoFile: {
            type: DataTypes.STRING,
            allow: null,
        },
        VideoFileLength: {
            type: DataTypes.INTEGER,
        },
        SubtitleFile: {
            type: DataTypes.STRING,
            allow: null,
        },
        Position: {
            type: DataTypes.STRING,
        },
        CreatedBy: {
            type: DataTypes.STRING,
        },
        CreatedOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        LastModifiedBy: {
            type: DataTypes.STRING,
        },
        LastModifiedOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
        {
            timestamps: false,
            tableName: "promotiononboardingvideo",
            indexes: [
                {
                    fields: ["PromotionID"]
                }
            ]
        }
    );
    return promotiononboardingvideo;
};
