$(document).ready(function(){function a(a){if(a.files&&a.files[0]){var b=new FileReader;b.onload=function(a){$('#preview').css('background','url('+a.target.result+')'),$('#preview').css('background-size','cover'),$('#preview-btn').prop('disabled',!1)},b.readAsDataURL(a.files[0])}}function b(){var a='https://raw.githubusercontent.com/fossasia/badgeyay/development/frontend/public/images/badge_backgrounds/'+$('input[name=img-default]').val()+'?raw=true';$('#preview').css('background','url('+a+')'),$('#preview').css('background-size','cover')}$(document).mouseup(function(a){var b=$('.custom-menu-content'),c=$('.glyphicon-th');c.is(a.target)||b.is(a.target)||0!==b.has(a.target).length||b.addClass('hidden')}),$('.glyphicon-th').click(function(){$('.custom-menu-content').toggleClass('hidden')}),$('.menu-options').click(function(){var a=$(this).data('item');$('.placeholder').text(a),$('input[name=\'img-default\']').val(a).trigger('change')}),$('.font-options').click(function(){var a=$(this).data('item');$('.placeholder2').text(a),$('input[name=\'custfont\']').val(a)}),$('#picker').minicolors({control:'hue',format:'hex',defaultValue:'',letterCase:'lowercase',position:'bottom left',theme:'bootstrap'}),$('#text-picker').minicolors({control:'hue',format:'hex',defaultValue:'#ffffff',letterCase:'lowercase',position:'bottom left',theme:'bootstrap'});$.ajax({url:'https://api.github.com/repos/fossasia/badgeyay/git/refs/heads/development',async:!0,success(a){if('undefined'!=typeof a.object&&'undefined'!=typeof a.object.sha)var b=a.object.sha,c=$('.version').attr('href','https://github.com/fossasia/badgeyay/tree/'+b).html(b);else $('.version').html('Failed to access version')},error(){$('.version').html('Failed to access version')}}),$('#imageFile').change(function(){a(this)}),$('#picker').change(function(){$('#preview-btn').prop('disabled',!1),$('#preview').css('background','')}),$('input[name=img-default]').change(function(){$('#preview-btn').prop('disabled',!1),b(),$('#picker').val('')});var c=!0;$('#preview-btn').on('click',function(){if($('#preview').toggleClass('hidden'),c=!c,console.log(c),!c){$('#preview-btn')[0].innerHTML='Close Preview';var a,d;if(''===$('#picker').val()?''!==$('input[name=img-default]').val()&&b():(a=$('#picker').val(),$('#preview').css('background-color',a.toString())),'Select a font'!==$('.placeholder2')[0].innerText&&(d=$('.placeholder2')[0].innerText,$('.preview-image-li').css('font-family',d.toString())),''!==$('#text-picker').val()){var e=$('#text-picker').val();$('.preview-image-li').css('color',e.toString())}}else $('#preview-btn')[0].innerHTML='Preview'}),$('#text-input').on('keyup',function(){var a=$('#textArea').val();a=a.split('\n')[0].split(','),$('#preview-li-1').text(a[0]),$('#preview-li-2').text(a[1]),$('#preview-li-3').text(a[2]),$('#preview-li-4').text(a[3]),$('#preview-li-5').text(a[4])}),$('#form1').submit(function(){$('#preview').addClass('hidden')})});