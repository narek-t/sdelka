 (function($) {

        /*
         * Spawn optionlift api client
         * olApi(apiUrl, tradingPlatformUrl)
         */
        var olSdkClient = new olSdk("//office.binaring.com/api/", "https://binaring.com/trading");

        var $form = $('#open-account-form'),
            $firstName = $('#open-account-form input[name="fname"]'),
            $lastName = $('#open-account-form input[name="lname"]'),
            $email = $('#open-account-form input[name="email"]'),
            $country = $('#open-account-form select[name="country"]'),
            $language = $('#open-account-form select[name="language"]'),
            $currency = $('#open-account-form select[name="currency"]'),
            $phone_prefix = $('#open-account-form input[name="phone_prefix"]'),
            $phone = $('#open-account-form input[name="phone"]'),
            $password = $('#open-account-form input[name="password"]'),
            $campaign = $('#open-account-form input[name="campaign"]'),
            $affiliate = $('#open-account-form input[name="affiliate"]'),
            $trading_group = $('#open-account-form input[name="trading_group_id"]'),
            $a_aid = $('#open-account-form input[name="a_aid"]'),
            $b_bid = $('#open-account-form input[name="b_bid"]'),
            $terms = $('#open-account-form input[name="terms"]'); 

        olSdkClient.connectRegistrationForm({
            '$form' : $form,
            '$firstName' : $firstName,
            '$lastName': $lastName,
            '$email': $email,
            '$country': $country,
            '$language': $language,
            '$currency': $currency,
            '$phone_prefix': $phone_prefix,
            '$phone': $phone,
            '$password': $password,
            '$campaign': $campaign,
            '$affiliate': $affiliate,
            '$trading_group': $trading_group,
            '$a_aid': $a_aid,
            '$b_bid': $b_bid,
            '$terms': $terms,
            'appendCountries' : true,
            'appendLanguages' : true,
            'appendCurrencies' : true,
            'detectCountry' : true,
            'success' : function(){
                window.location.replace('//binaring.com/trading/#!/account/deposit/');
            },
            'error'   : function(response){
                $('.ol-error').remove();
                $form.find('.form-control').removeClass("err");

                $response = response.responseJSON.meta.errors;

                $.each($response, function() {
                    $.each(this, function(k, v) {
                        $form.find('*[name="'+k+'"]').addClass("err").parent('div').find('.ol-err').html(v);
                    });
                });
                if($response.message) {
                    $('.errors').show().html($response.message);
                }
            }
        });

    })(jQuery);