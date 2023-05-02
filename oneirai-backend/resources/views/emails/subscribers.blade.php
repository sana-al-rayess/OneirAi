<!-- @component('mail::message')
# Welcome to the first Newletter
Dear {{$email}},
OneirAi team is looking forward to communicating more with you. For more information visit our blog.
@component('mail::button', ['url' => 'https://laraveltuts.com'])
Blog
@endcomponent
Thanks,<br>
{{ config('app.name') }}
@endcomponent -->
@component('mail::message')
@php
    $logo = asset('logo_oneira.png');
    $color = '#3370A6';
    $font = 'Macondo';
@endphp

{{-- Header --}}
@slot('header')
    @component('mail::header', ['url' => config('app.url')])
        <img src="{{ $logo }}" alt="{{ config('app.name') }}" width="120" height="80">
    @endcomponent
@endslot

{{-- Body --}}
@slot('bodyStyle')
    style="background-color: {{ $color }}; color: white; font-family: '{{ $font }}', cursive;"
@endslot

# Welcome to the first Newsletter

Dear {{$email}},

OneirAi team is looking forward to communicating more with you. For more information visit our blog.

@component('mail::button', ['url' => 'https://laraveltuts.com'])
Blog
@endcomponent

Thanks,<br>
{{ config('app.name') }}

{{-- Footer --}}
@slot('footer')
    @component('mail::footer')
        © {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
    @endcomponent
@endslot
@endcomponent
