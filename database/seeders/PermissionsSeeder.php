<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Create the initial roles and permissions.
     *
     * @return void
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        $permissions = ['view', 'create', 'edit', 'delete'];
        foreach ($permissions as $permission ) {
            if(!Permission::where('name', $permission)->exists()) {
                Permission::create(['name' => $permission]);
            }
        }

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'employee']);
        $role1->givePermissionTo('view');
        $role1->givePermissionTo('create');


        $role2 = Role::create(['name' => 'admin']);
        $role2->givePermissionTo('view');
        $role2->givePermissionTo('create');
        $role2->givePermissionTo('edit');
        $role2->givePermissionTo('delete');

        $role3 = Role::create(['name' => 'project-leader']);
        $role3->givePermissionTo('view');
        $role3->givePermissionTo('create');
        $role3->givePermissionTo('edit');
        $role3->givePermissionTo('delete');

        $role4 = Role::create(['name' => 'division-leader']);
        $role4->givePermissionTo('view');
        $role4->givePermissionTo('create');
        $role4->givePermissionTo('edit');
        $role4->givePermissionTo('delete');

        // $role5 = Role::create(['name' => 'super-admin']);
        // // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users
        $user = \App\Models\User::factory()->create([
            'name' => 'employee',
            'email' => 'employee@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',

        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role2);

        $user = \App\Models\User::factory()->create([
            'name' => 'project-leader',
            'email' => 'project-leader@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role3);

        $user = \App\Models\User::factory()->create([
            'name' => 'division-leader',
            'email' => 'division-leader@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role4);

        $user = \App\Models\User::factory()->create([
            'name' => 'radek',
            'email' => 'radek@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role1);
        $user = \App\Models\User::factory()->create([
            'name' => 'vojtech',
            'email' => 'vojtech@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role1);
        $user = \App\Models\User::factory()->create([
            'name' => 'jacquelyn',
            'email' => 'jacquelyn@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role1);
        $user = \App\Models\User::factory()->create([
            'name' => 'jan',
            'email' => 'jan@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);
        $user->assignRole($role1);
        $user = \App\Models\User::factory()->create([
            'name' => 'john',
            'email' => 'john@gmail.com',
            'password' => '$2y$10$sz3yCD/zGresrLaqt9cLaeAw4Hr.9Peg.iytVAW93/EsQxV4HG/Em',
        ]);


        // all 4 roles has got password set to: Password123#

    }
}
