<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rfq;
use Illuminate\Support\Facades\DB;

class RfqSeeder extends Seeder
{
    public function run()
    {
        $rfqs = [
            ['number' => 'none', 'name' => 'none'],
            ['number' => 'RFQ-2024-001', 'name' => 'Ut molestiae autem soluta et'],
            ['number' => 'RFQ-2024-002', 'name' => 'Libero sit sunt facere laborum non odit'],
            ['number' => 'RFQ-2024-003', 'name' => 'Ipsam non earum veniam perspiciatis'],
            ['number' => 'RFQ-2024-004', 'name' => 'Omnis eum repudiandae quaerat provident tenetur'],
        ];

        foreach ($rfqs as $rfq) {
            DB::table('rfqs')->insert([
                'rfq_number' => $rfq['number'],
                'rfq_name' => $rfq['name'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
