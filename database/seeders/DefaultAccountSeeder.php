<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DefaultAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::create(['name' => 'Admin']);
        $agent = Role::create(['name' => 'Agent']);

        User::create([
            'name'=>'Administrator',
            'email'=>'admin@gmail.com',
            'password'=>bcrypt('password')
        ])->assignRole($admin);

        User::create([
            'name'=>'Test Agent',
            'email'=>'agent@gmail.com',
            'password'=>bcrypt('password')
        ])->assignRole($agent);
    }
}
