<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\CompanySetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::create([
            'name' => 'Payreto',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'iBAN-X',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'Noire',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'Truevo',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'T-P Processing',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'FIDO MS',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);

        $company = Company::create([
            'name' => 'FIDO Money',
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => json_encode([
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ]),
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => json_encode([
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
            ]),
        ]);
    }
}
