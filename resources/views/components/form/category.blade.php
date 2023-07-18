<div class="card">
    <div class="card-body">
        <h5 class="card-title">Category {{ @$edit ? 'Update' : 'Create' }}</h5>

        <!-- category Form -->
        @if (@$edit)
            <form action="@route('admin.category.update', @$edit->category_id)" method="POST" enctype="multipart/form-data">
                @method('put')
            @else
                <form action="@route('admin.category.store')" method="POST" enctype="multipart/form-data">
        @endif
        @csrf

        <section class="row">

            {{-- category name --}}
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                @component('components.input', [
                    'label' => 'Category name',
                    'name' => 'name',
                    'placeholder' => 'type here category name',
                    'required' => true,
                    'value' => @$edit ? @$edit->name : '',
                ])
                @endcomponent
            </div>
        </section>

        {{-- submit button --}}
        <div class="text-center">
            @if (@$edit)
                @component('components.button.submit_button', [
                    'name' => 'category update',
                ])
                @endcomponent
            @else
                @component('components.button.submit_button', [
                    'name' => 'category update',
                ])
                @endcomponent
            @endif
            @component('components.button.reset_button')
            @endcomponent

        </div>
        </form><!-- End Horizontal Form -->

    </div>
</div>
