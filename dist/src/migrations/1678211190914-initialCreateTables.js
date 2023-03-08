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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialCreateTables1678211190914 = void 0;
class initialCreateTables1678211190914 {
    constructor() {
        this.name = 'initialCreateTables1678211190914';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL, "cep" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL, "link" character varying NOT NULL, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "announcementId" uuid, "userId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL, "isAuction" boolean NOT NULL, "vehicleType" character varying NOT NULL, "title" character varying NOT NULL, "mileage" integer NOT NULL, "description" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "isSold" boolean NOT NULL DEFAULT false, "initialBid" numeric(10,2) NOT NULL DEFAULT '0', "actualBid" numeric(10,2) NOT NULL DEFAULT '0', "imgMain" character varying, "year" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "bids" ("id" uuid NOT NULL, "value" numeric(10,2) NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "announcementId" uuid, "userId" uuid, CONSTRAINT "PK_7950d066d322aab3a488ac39fe5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "cellphone" character varying NOT NULL, "password" character varying NOT NULL, "description" character varying NOT NULL, "dateOfBirth" TIMESTAMP WITH TIME ZONE NOT NULL, "isAdvertiser" boolean NOT NULL, "img" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "bids" ADD CONSTRAINT "FK_41ed5bd3956a8082d8caae3eb7c" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "bids" ADD CONSTRAINT "FK_1531393fadbf123f3d51c91d819" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
            yield queryRunner.query(`ALTER TABLE "bids" DROP CONSTRAINT "FK_1531393fadbf123f3d51c91d819"`);
            yield queryRunner.query(`ALTER TABLE "bids" DROP CONSTRAINT "FK_41ed5bd3956a8082d8caae3eb7c"`);
            yield queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4"`);
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
            yield queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "bids"`);
            yield queryRunner.query(`DROP TABLE "announcements"`);
            yield queryRunner.query(`DROP TABLE "comments"`);
            yield queryRunner.query(`DROP TABLE "images"`);
            yield queryRunner.query(`DROP TABLE "addresses"`);
        });
    }
}
exports.initialCreateTables1678211190914 = initialCreateTables1678211190914;
