-- Revert pokemon:init from pg

BEGIN;

DROP TABLE IF EXISTS "type";

DROP TABLE IF EXISTS "pokemon_type";

DROP TABLE "pokemon";

COMMIT;
