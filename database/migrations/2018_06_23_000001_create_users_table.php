<?php

use App\Classes\Constants;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("users", function (Blueprint $table) {
            $table->increments("id");
            $table->integer("role_id")->unsigned()->default(Constants::USER_DEFAULT_ROLE_ID);
            $table->string("surname", 255);
            $table->string("name", 255);
            $table->string("middle_name", 255);
            $table->string("email", 255)->unique();
            $table->boolean("email_verified")->default(false);
            $table->string("password", 255);
            $table->string("api_token", 60);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::table("users", function (Blueprint $table) {
            $table->foreign("role_id")->references("id")->on("roles")->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table("users", function (Blueprint $table) {
            $table->dropForeign(["role_id"]);
        });

        Schema::dropIfExists("users");
    }
}
