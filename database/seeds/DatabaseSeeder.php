<?php

use App\Role;
use App\Classes\Constants;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Filling table roles

        $field = Role::find($id = Constants::USER_ROLE_ID_ADMINISTRATOR);

        if (is_null($field)) {
            $field = new Role();
            $field->id = $id;
            $field->label = Constants::USER_ROLE_ADMINISTRATOR;
            $field->save();
        }

        $field = Role::find($id = Constants::USER_ROLE_ID_CLIENT);

        if (is_null($field)) {
            $field = new Role();
            $field->id = $id;
            $field->label = Constants::USER_ROLE_CLIENT;
            $field->save();
        }
    }
}
