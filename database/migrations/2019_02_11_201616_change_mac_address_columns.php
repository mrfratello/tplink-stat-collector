<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeMacAddressColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mac_address', function (Blueprint $table) {
            $table->dropPrimary('id');
            $table->primary('address');
            $table->dropColumn('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mac_address', function (Blueprint $table) {
            $table->dropPrimary('address');
            $table->increments('id');
        });
    }
}
