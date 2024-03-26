<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class UrlMigration extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'url_id' => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'original_url' => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
                'null' => false
            ],
            'short_code' => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
                'null' => false
            ],
        ]);
        $this->forge->addKey('url_id', true);
        $this->forge->createTable('urls');
    }

    public function down()
    {
        $this->forge->dropTable('urls');
    }
}
