<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\CompanySetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Main/Companies/Index', [
            'companies' => Company::query()
                ->paginate(10)
                ->through(fn ($company) => [
                    'id' => $company->id,
                    'name' => $company->name,
                    'is_active' => $company->is_active,
                    'created_at' => $company->created_at->format('M d, Y h:i A'),
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Main/Companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'unique:companies,name'],
            'is_active' => ['required', 'boolean']
        ]);
        $company = Company::create($data);

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

        return redirect()->route('companies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        return Inertia::render('Main/Companies/Edit',[
            'company' => $company
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        $data = $request->validate([
            'name' => ['required', "unique:companies,name,{$company->id}"],
            'is_active' => ['required', 'boolean']
        ]);

        $company->update($data);
        return redirect()->route('companies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
