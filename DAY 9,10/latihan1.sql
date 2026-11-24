/*************************/
/* membuat DB dan table  */
/* memrupakan fungsi DLL */
/*************************/
DROP DATABASE Book1;		#menghapus database 

CREATE DATABASE IF NOT EXISTS Book1;

USE Book1;

CREATE TABLE Sheet1(
saklar VARCHAR(3)
);

/*************************/
/* memanipulasi data     */
/* memrupakan fungsi DLL */
/*************************/

INSERT Sheet1  VALUES ('ON');
insert Sheet1 value ('OFF');

select saklar as saklar,  if (saklar="on","nyala","mati") as status
from Sheet1;

/*********************************/
/* membuat table baru            */
/* mengisi dan menampilakan data */
/*********************************/

create table Lalin (
	Lampu varchar (6)
    );

insert Lalin values 
('merah'), 
('kuning'),
('hijau');

select L.lampu as lampu, 
		IF(L.lampu="merah",
        "berhenti",
			IF(L.lampu="kuning",
            "bersiap",
            "berjalan"
				)
			)as status
from Lalin L ;

/*********************************/
/* membuat table baru            */
/* mengisi dan menampilakan data */
/*********************************/

create table Status_teman (
nama          varchar (10),
jenis_kelamin varchar (6),
status        varchar (7)
);

insert Status_teman values
('Irfan', 'Pria', 'Sendiri'),
('Riyan', 'Pria', 'Kawin'),
('Rio', 'Pria', 'Cerai'),
('Nida', 'Wanita', 'Sendiri'),
('Ghefira', 'Wanita', 'Kawin'),
('Salsalbila', 'Wanita', 'Cerai'); 

create view vw_stat_temen as
select 	st.nama,
		st.jenis_kelamin,
        st.status,
        IF (st.jenis_kelamin="Pria",
			IF (st.status="Sendiri", 'Bujangan',
				IF (st.status="Kawin", "Menikah", "Duda"
            )
		), IF (st.status="Sendiri", "Perawan",
			IF (st.status="Kawin", "Menikah", "Janda"
            )
		)
	) as keterangan_if,
    case st.jenis_kelamin
		when "Pria" then
			case st.status
				when "Sendiri" then "Bujangan"
				when "Kawin" then "Menikah"
                else "Duda"
			end
        else 
        case st.status
				when "Sendiri" then "Perawan"
				when "Kawin" then "Menikah"
                else "Janda"
			end
	end as keteranagan_case,
		IF (st.jenis_kelamin = "Pria",
			case st.status
				when "Sendiri" then "Bujangan"
                when "Kawin" then "Menikah"
                else "Duda"
			end,
            case st.status
				when "Sendiri" then "Perawan"
                when "Kawin" then "Menikah"
                else "Janda"
			end
    ) as keterangan_if_case
from Status_teman st;




