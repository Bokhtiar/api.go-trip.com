<div class="card">
    <div class="card-body">
        <h5 class="card-title">Amenity {{ @$edit ? 'Update' : 'Create' }}</h5>

        <!-- amenity Form -->
        @if (@$edit)
            <form action="@route('admin.amenity.update', @$edit->amenity_id)" method="POST" enctype="multipart/form-data">
                @method('put')
            @else
                <form action="@route('admin.amenity.store')" method="POST" enctype="multipart/form-data">
        @endif
        @csrf

        <section class="row">

            {{-- amenity name --}}
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                @component('components.input', [
                    'label' => 'Amenity name',
                    'name' => 'name',
                    'placeholder' => 'type here amenity name',
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
                    'name' => 'amenity update',
                ])
                @endcomponent
            @else
                @component('components.button.submit_button', [
                    'name' => 'amenity update',
                ])
                @endcomponent
            @endif
            @component('components.button.reset_button')
            @endcomponent

        </div>
        </form><!-- End Horizontal Form -->

    </div>
</div>
