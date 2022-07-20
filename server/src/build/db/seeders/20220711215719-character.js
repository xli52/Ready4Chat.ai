"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add seed commands here.
             *
             * Example:
             * await queryInterface.bulkInsert('People', [{
             *   name: 'John Doe',
             *   isBetaMember: false
             * }], {});
             */
            yield queryInterface.bulkInsert("characters", [
                {
                    name: "jane",
                    gender: "FEMALE",
                    price_cents: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "joshua",
                    gender: "MALE",
                    price_cents: 599,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "elizabeth",
                    gender: "FEMALE",
                    price_cents: 599,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "adam",
                    gender: "MALE",
                    price_cents: 599,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "chris",
                    gender: "MALE",
                    price_cents: 599,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add commands to revert seed here.
             *
             * Example:
             * await queryInterface.bulkDelete('People', null, {});
             */
            yield queryInterface.bulkDelete("characters", null, {});
        });
    },
};
