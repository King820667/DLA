// ������ ��� ����������� ������ ���������� � ��� ������� �� ��� ����� ������� ��� �����
document.querySelectorAll('.img-container img').forEach(img => {
    // ��� ����� �� ����������� �������� ����������� ���� � �������� src ����������� ������ ������������ ����
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
});
// ��� ����� �� ������� ������ ������������ ���� ����� ����������� ����
document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}