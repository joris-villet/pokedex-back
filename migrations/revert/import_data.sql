-- Revert pokemon:import_data from pg

BEGIN;

DELETE FROM "type";

DELETE FROM "pokemon_type";

DELETE FROM "pokemon";

COMMIT;
