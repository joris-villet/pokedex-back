-- Deploy pokemon:init to pg

BEGIN;

CREATE TABLE pokemon (
  "id" int NOT NULL,
  "nom" text NOT NULL,
  "pv" int NOT NULL,
  "attaque" int NOT NULL,
  "defense" int NOT NULL,
  "attaque_spe" int NOT NULL,
  "defense_spe" int NOT NULL,
  "vitesse" int NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "numero" int NOT NULL
);

CREATE TABLE pokemon_type (
  "id" int NOT NULL,
  "pokemon_numero" int NOT NULL,
  "type_id" int NOT NULL,
  "created_at" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

CREATE TABLE type (
  "id" int NOT NULL,
  "name" text NOT NULL,
  "color" text NOT NULL,
  "created_at" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL
);

COMMIT;
