<div class="card">
    <div class="card-body">
        <h5 class="card-title">Complement {{ @$edit ? 'Update' : 'Create' }}</h5>

        <!-- complement Form -->
        @if (@$edit)
            <form action="@route('admin.complement.update', @$edit->complement_id)" method="POST" enctype="multipart/form-data">
                @method('put')
            @else
                <form action="@route('admin.complement.store')" method="POST" enctype="multipart/form-data">
        @endif
        @csrf

        <section class="row">

            {{-- complement name --}}
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                @component('components.input', [
                    'label' => 'complement name',
                    'name' => 'name',
                    'placeholder' => 'type here complement name',
                    'required' => true,
                    'value' => @$edit ? @$edit->name : '',
                ])
                @endcomponent
            </div>

            {{-- complement items --}}
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                @component('components.input', [
                    'label' => 'complement name',
                    'name' => 'items',
                    'placeholder' => 'type here complement items',
                    'required' => true,
                    'value' => @$edit ? @$edit->items : '',
                ])
                @endcomponent
            </div>
        </section>

        {{-- submit button --}}
        <div class="text-center">
            @if (@$edit)
                @component('components.button.submit_button', [
                    'name' => 'complement update',
                ])
                @endcomponent
            @else
                @component('components.button.submit_button', [
                    'name' => 'complement update',
                ])
                @endcomponent
            @endif
            @component('components.button.reset_button')
            @endcomponent

        </div>
        </form><!-- End Horizontal Form -->

    </div>
</div>
