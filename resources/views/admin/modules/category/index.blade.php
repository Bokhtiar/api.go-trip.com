@extends('layouts.admin.app')
@section('title', $title)
@section('admin_content')


    {{-- breadcrumbs --}}
    @component('components.breadcrumbs', [
        'parent' => 'Home',
        'page' => $title,
        'parent_url' => 'admin.dashboard',
    ])
    @endcomponent

    {{-- page heading --}}
    @component('components.heading', [
        'pageTitle' => 'Dashboard',
        'anotherPageIcon' => 'bi bi-plus',
        'anotherPageUrl' => 'admin.category.index',
    ])
    @endcomponent

    {{-- category --}}
    <div class="row">
        {{-- table --}}
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
            @component('components.table.category', [
                'categories' => $categories,
            ])
            @endcomponent
        </div>
        {{-- form --}}
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            @component('components.form.category', [
                'edit' => @$edit,
            ])
            @endcomponent
        </div>
    </div>


@endsection
